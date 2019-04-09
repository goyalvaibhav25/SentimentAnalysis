package speechsdk.quickstart;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Semaphore;

import org.apache.commons.lang.StringUtils;
import org.springframework.web.client.RestTemplate;

import com.microsoft.cognitiveservices.speech.CancellationReason;
import com.microsoft.cognitiveservices.speech.ResultReason;
import com.microsoft.cognitiveservices.speech.SpeechConfig;
import com.microsoft.cognitiveservices.speech.SpeechRecognizer;
import com.microsoft.cognitiveservices.speech.audio.AudioConfig;
import com.microsoft.cognitiveservices.speech.audio.PullAudioInputStreamCallback;

public class SpeechToTextConverter {

	// The Source to stop recognition.
	private static Semaphore stopRecognitionSemaphore;
	int recognizedTextCount = 1;
	KeywordsExtractor extractor = new KeywordsExtractor();
	SentimentAnalyzer finder = new SentimentAnalyzer();

	// Speech recognition with audio stream
	public void convert() throws InterruptedException, ExecutionException, FileNotFoundException {
		stopRecognitionSemaphore = new Semaphore(0);

		// Creates an instance of a speech config with specified
		// subscription key and service region. Replace with your own subscription key
		// and service region (e.g., "westus").
		SpeechConfig config = SpeechConfig.fromSubscription("57fe7b2530be40e185137cc7af011843", "westus");

		// Create an audio stream from a wav file.
		// Replace with your own audio file name.
		PullAudioInputStreamCallback callback = new WavStream(new FileInputStream("C:/Test/abc.wav"));
		AudioConfig audioInput = AudioConfig.fromStreamInput(callback);

		RestTemplate restTemplate = new RestTemplate();
		// Creates a speech recognizer using audio stream input.
		SpeechRecognizer recognizer = new SpeechRecognizer(config, audioInput);
		{
			// Subscribes to events.
			recognizer.recognizing.addEventListener((s, e) -> {
				// System.out.println("RECOGNIZING: Text=" + e.getResult().getText());
			});
			
			
			recognizer.recognized.addEventListener((s, e) -> {
				if (e.getResult().getReason() == ResultReason.RecognizedSpeech) {
					String recognizedText = e.getResult().getText();
					System.out.println("RECOGNIZED: Text=" + recognizedText);

					if (null != recognizedText && !"".equalsIgnoreCase(recognizedText.trim())) {
						try {
							String keywords = extractor.getKeyWords(recognizedText);
							
							String str =  keywords;
							str = StringUtils.substringBetween(str, "keyPhrases", "errors");
							str = StringUtils.replaceChars(str, "\":{}][", "        ");
							str = StringUtils.replace(str, ",", " ");
							str = StringUtils.trim(str);
							//System.out.println(str);
							
							
							
							

							String sentiment = finder.getSentiment(recognizedText);
							
							String str2 = sentiment;
							str2 = StringUtils.substringBetween(str2, "score", "errors");
							str2 = StringUtils.replaceChars(str2, "\"\n:{}][", "         ");
							str2 = StringUtils.replace(str2, ",", " ");
							str2 = StringUtils.trim(str2);
						

							Post post = new Post();
							post.setSequence(String.valueOf(recognizedTextCount));
							post.setText(recognizedText);
							post.setLanguage("en");
							post.setKeywords(str);
							post.setSentiments(str2);
							post.setCallid("1");

							Post postCreated = restTemplate.postForObject("http://localhost:8080/posts/", post,
									Post.class);
							System.out.println(postCreated.toString());
							recognizedTextCount++;
						} catch (Exception e1) {
							// TODO Auto-generated catch block
							e1.printStackTrace();
						}
					}

				} else if (e.getResult().getReason() == ResultReason.NoMatch) {
					System.out.println("NOMATCH: Speech could not be recognized.");
				}
			});

			recognizer.canceled.addEventListener((s, e) -> {
				System.out.println("CANCELED: Reason=" + e.getReason());

				if (e.getReason() == CancellationReason.Error) {
					System.out.println("CANCELED: ErrorCode=" + e.getErrorCode());
					System.out.println("CANCELED: ErrorDetails=" + e.getErrorDetails());
					System.out.println("CANCELED: Did you update the subscription info?");
				}

				stopRecognitionSemaphore.release();
			});

			recognizer.sessionStarted.addEventListener((s, e) -> {
				System.out.println("\nSession started event.");
			});

			recognizer.sessionStopped.addEventListener((s, e) -> {
				System.out.println("\nSession stopped event.");

				// Stops translation when session stop is detected.
				System.out.println("\nStop translation.");
				stopRecognitionSemaphore.release();
			});

			// Starts continuous recognition. Uses stopContinuousRecognitionAsync() to stop
			// recognition.
			recognizer.startContinuousRecognitionAsync().get();

			// Waits for completion.
			stopRecognitionSemaphore.acquire();

			// Stops recognition.
			recognizer.stopContinuousRecognitionAsync().get();
		}
	}

	public static void main(String args[]) throws FileNotFoundException, InterruptedException, ExecutionException {

		SpeechToTextConverter converter = new SpeechToTextConverter();
		converter.convert();

		/*
		 * RestTemplate restTemplate = new RestTemplate();
		 * 
		 * Post post = new Post(); post.setSequence(String.valueOf(-10));
		 * post.setText("Test1"); post.setLanguage("en"); post.setKeywords("a b c");
		 * post.setSentiments("0.1"); post.setCallid("1");
		 * 
		 * Post postCreated = restTemplate.postForObject("http://localhost:8080/posts/",
		 * post, Post.class); System.out.println(postCreated.toString());
		 */

	}
}
