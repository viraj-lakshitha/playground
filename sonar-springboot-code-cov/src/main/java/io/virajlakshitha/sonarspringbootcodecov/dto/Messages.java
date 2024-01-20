package io.virajlakshitha.sonarspringbootcodecov.dto;

public class Messages {
    private int count;

    public Messages(int count) {
        this.count = count;
    }

    public String getMessage() {
        return "Message_" + count;
    }

    public void increaseCount() {
        this.count++;
    }

    public void decreaseCount() {
        this.count--;
    }

    public void decreaseCountDouble() {
        this.count = this.count - 2;
    }

    public void increaseCountDouble() {
        this.count = this.count + 2;
    }
}
