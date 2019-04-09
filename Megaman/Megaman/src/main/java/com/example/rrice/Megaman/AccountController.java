package com.example.rrice.Megaman;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller

public class AccountController {
	@RequestMapping("/account")
	public String getBillPaymentDetails(Model model) {
		return "bill.html";
	}
	
	@RequestMapping("/claim")
	public String getClaimDetails(Model model) {
		return "claims.html";
	}
}