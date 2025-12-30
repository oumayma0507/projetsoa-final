package com.person.dao;

import com.person.model.Person;

import javax.persistence.*;
import java.util.List;

public class PersonDAO {

    private static final EntityManagerFactory emf =
            Persistence.createEntityManagerFactory("Project_person");

    public List<Person> findAll() {
        EntityManager em = emf.createEntityManager();
        List<Person> list = em.createQuery(
                "SELECT p FROM Person p", Person.class).getResultList();
        em.close();
        return list;
    }

    public Person findById(int id) {
        EntityManager em = emf.createEntityManager();
        Person p = em.find(Person.class, id);
        em.close();
        return p;
    }

    public List<Person> findByName(String name) {
        EntityManager em = emf.createEntityManager();
        List<Person> list = em.createQuery(
                "SELECT p FROM Person p WHERE p.name LIKE :n", Person.class)
                .setParameter("n", "%" + name + "%")
                .getResultList();
        em.close();
        return list;
    }

    public void save(Person person) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();
        tx.begin();
        em.persist(person);
        tx.commit();
        em.close();
    }

    public void update(Person person) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();
        tx.begin();
        em.merge(person);
        tx.commit();
        em.close();
    }

    public void delete(int id) {
        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();
        tx.begin();
        Person p = em.find(Person.class, id);
        if (p != null) {
            em.remove(p);
        }
        tx.commit();
        em.close();
    }
}
