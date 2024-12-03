import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const candidate = defineType({
    name: "candidate",
    title: "Candidate",
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
            name: "skills",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Next.js", value: "Next.js" },
                    { title: "Javascript", value: "Javascript" },
                    { title: "Git", value: "Git" },
                    { title: "C++", value: "C++" },
                    { title: "React", value: "React" },
                    { title: "MongoDB", value: "MongoDB" },
                ],
            },
        }),
        defineField({
            name: "otherSkills",
            type: "string",
            title: "Other Skills",
        }),
        defineField({
            name: "experience",
            type: "string",
            title: "Experience",
            options: {
                list: [
                    { title: "Fresher", value: "Fresher" },
                    { title: "1-2 years", value: "1-2 years" },
                    { title: "2-3 years", value: "2-3 years" },
                    { title: "3-4 years", value: "3-4 years" },
                    { title: "4-5 years", value: "4-5 years" },
                    { title: "5+ years", value: "5+ years" },
                ],
                layout: "radio",
            },
        }),
        defineField({
            name: "linkedin",
            title: "LinkedIn",
            type: "url",
        }),
        defineField({
            name: "github",
            title: "Github",
            type: "url",
        }),
        defineField({
            name: "portfolio",
            title: "Portfolio",
            type: "url",
        }),
        defineField({
            name: "about",
            title: "About",
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
