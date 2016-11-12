package com.kth.dh2655.web;

import com.kth.dh2655.domain.HealthCheck;
import org.springframework.web.bind.annotation.*;

@RestController
public class HealthcheckController {

    @RequestMapping(value = "/healthcheck", method = RequestMethod.GET)
    public HealthCheck getHealthCheck() {
        return new HealthCheck();
    }
}
