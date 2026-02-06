package com.portfolio.cloudadmindashboard.audit;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/audit")
public class AuditController {

  @GetMapping("/logs")
  public List<Map<String, Object>> logs() {
    return List.of(
      Map.of("action", "ROLE_UPDATED", "actor", "admin@corp.io", "at", Instant.now().toString()),
      Map.of("action", "SETTING_CHANGED", "actor", "ops@corp.io", "at", Instant.now().toString())
    );
  }
}
