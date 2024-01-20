package io.virajlakshitha.sonarspringbootcodecov.dto;

public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.age = age;
        this.name = name;
    }

    public void increaseAge () {
        this.age++;
    }
}
