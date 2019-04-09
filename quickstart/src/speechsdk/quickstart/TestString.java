package speechsdk.quickstart;

import org.apache.commons.lang.StringUtils;

public class TestString {
	
	public static void main(String args[]) {
		String str =  "{\"documents\":[{\"id\":\"1\",\"keyPhrases\":[\"status\",\"payments\"]}],\"errors\":[]}";
		str = StringUtils.substringBetween(str, "keyPhrases", "errors");
		str = StringUtils.replaceChars(str, "\":{}][", "        ");
		str = StringUtils.replace(str, ",", " ");
		str = StringUtils.trim(str);
		System.out.println(str);
		
		
		String str2 = "{\n  \"documents\": [\n    {\n      \"id\": \"1\",\n      \"score\": 0.19933980703353882\n    }\n  ],\n  \"errors\": []\n}";
		str2 = StringUtils.substringBetween(str2, "score", "errors");
		str2 = StringUtils.replaceChars(str2, "\":{}][", "        ");
		str2 = StringUtils.replace(str2, ",", " ");
		str2 = StringUtils.trim(str2);
		
		
		
		
		
		System.out.println(str2);
		
		
		
	}

}
