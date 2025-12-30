package com.person.service;

import com.person.dao.PersonDAO;
import com.person.model.Person;

import java.util.List;

public class PersonService {

    private PersonDAO dao = new PersonDAO();

    public List<Person> getAll() {
        return dao.findAll();
    }

    public Person getById(int id) {
        return dao.findById(id);
    }

    public List<Person> getByName(String name) {
        return dao.findByName(name);
    }

    public void add(Person p) {
        dao.save(p);
    }

    public void update(Person p) {
        dao.update(p);
    }

    public void delete(int id) {
        dao.delete(id);
    }
}
