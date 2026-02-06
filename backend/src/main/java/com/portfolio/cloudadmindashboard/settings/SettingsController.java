package com.portfolio.cloudadmindashboard.settings;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/settings")
public class SettingsController {

  @GetMapping
  public Map<String, Object> settings() {
    return Map.of("mfaRequired", true, "sessionMinutes", 30, "emailNotifications", true);
  }
}
