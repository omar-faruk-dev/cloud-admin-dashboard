package com.portfolio.cloudadmindashboard.metrics;

import java.util.Map;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/metrics")
public class MetricsController {

  @GetMapping("/kpis")
  @Cacheable("kpis")
  public Map<String, Number> kpis() {
    return Map.of("latencyMsP95", 118, "errorRate", 0.02, "activeSessions", 342);
  }
}
