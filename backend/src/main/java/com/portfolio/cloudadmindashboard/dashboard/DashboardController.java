package com.portfolio.cloudadmindashboard.dashboard;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

  @GetMapping("/summary")
  public Map<String, Object> summary() {
    return Map.of("tenants", 28, "activeUsers", 1842, "uptime", "99.99%");
  }
}
