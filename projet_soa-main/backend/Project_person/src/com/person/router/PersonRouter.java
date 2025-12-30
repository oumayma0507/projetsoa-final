package com.person.router;

import com.person.model.Person;
import com.person.service.PersonService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/persons")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PersonRouter {

    private PersonService service = new PersonService();

    // ===================== GET ALL =====================
    @GET
    public Response getAllPersons() {
        List<Person> persons = service.getAll();
        return Response.ok(persons).build();
    }

    // ===================== GET BY ID =====================
    @GET
    @Path("/{id}")
    public Response getPersonById(@PathParam("id") int id) {
        Person p = service.getById(id);
        if (p == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(p).build();
    }

    // ===================== SEARCH =====================
    @GET
    @Path("/search/{name}")
    public Response searchByName(@PathParam("name") String name) {
        return Response.ok(service.getByName(name)).build();
    }

    // ===================== ADD =====================
    @POST
    public Response addPerson(Person person) {
        service.add(person);
        return Response.status(Response.Status.CREATED).build();
    }

    // ===================== UPDATE =====================
    @PUT
    @Path("/{id}")
    public Response updatePerson(@PathParam("id") int id, Person person) {
        person.setId(id);
        service.update(person);
        return Response.ok().build();
    }

    // ===================== DELETE =====================
    @DELETE
    @Path("/{id}")
    public Response deletePerson(@PathParam("id") int id) {
        service.delete(id);
        return Response.noContent().build();
    }
}
