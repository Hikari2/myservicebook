package com.kth.dh2655.domain;

public class HealthCheck {

    private App app = new App();

    public HealthCheck() {
    }

    public App getApp() {
        return app;
    }

    public void setApp(App app) {
        this.app = app;
    }

    private class App {

        private String message = "Application is running";
        private Boolean healthy = true;

        public App() {

        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public Boolean getHealthy() {
            return healthy;
        }

        public void setHealthy(Boolean healthy) {
            this.healthy = healthy;
        }
    }
}
