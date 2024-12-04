import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const recruiter = defineType({
    name: "recruiter",
    title: "Recruiter",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "id",
            type: "number",
        }),
        defineField({
            name: "name",
            title: "Full Name",
            type: "string",
        }),
        defineField({
            name: "email",
            type: "string",
        }),
        defineField({
            name: "mobile",
            title: "Mobile Number",
            type: "number",
        }),
        defineField({
            name: "image",
            type: "url",
        }),
        defineField({
            name: "company",
            title: "Company Name",
            type: "string",
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string",
        }),
        defineField({
            name: "info",
            title: "Additional Information",
            type: "text",
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "email",
            media: "image",
        },
    },
});
