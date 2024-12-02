import { defineField, defineType } from "sanity";

export const recruiter = defineType({
    name: "recruiter",
    title: "Recruiter",
    type: "document",
    fields: [
        defineField({
            name: "id",
            type: "number",
        }),
        defineField({
            name: "name",
            type: "string",
        }),
        defineField({
            name: "email",
            type: "string",
        }),
        defineField({
            name: "image",
            type: "url",
        }),
        defineField({
            name: "mobile",
            type: "number",
        }),
        defineField({
            name: "company",
            type: "string",
        }),
        defineField({
            name: "jobTitle",
            type: "string",
        }),
        defineField({
            name: "experience",
            type: "string",
        }),
        defineField({
            name: "info",
            type: "text",
        }),
    ],
});
