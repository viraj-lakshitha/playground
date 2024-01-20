package io.virajlakshitha.sonarspringbootcodecov;

import io.virajlakshitha.sonarspringbootcodecov.dto.Messages;
import org.junit.jupiter.api.Test;

public class MessageTest {

    @Test
    void shouldUpdateMessageCount() {
        Messages messages = new Messages(0);
        messages.increaseCount();
        messages.increaseCount();
        messages.decreaseCountDouble();

        messages.decreaseCount();
        messages.decreaseCount();
        messages.increaseCountDouble();
    }
}
