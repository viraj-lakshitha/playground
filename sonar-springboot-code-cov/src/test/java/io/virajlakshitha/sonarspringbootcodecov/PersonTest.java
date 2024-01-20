package io.virajlakshitha.sonarspringbootcodecov;

import io.virajlakshitha.sonarspringbootcodecov.dto.Messages;
import io.virajlakshitha.sonarspringbootcodecov.dto.Person;
import org.junit.jupiter.api.Test;

public class PersonTest {
    @Test
    void shouldUpdatePersonAge() {
        Person person = new Person("Viraj", 20);
        person.increaseAge();
    }
}
