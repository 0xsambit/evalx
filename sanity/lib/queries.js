const { defineQuery } = require("next-sanity");

export const CANDIDATEE_QUERY =
    defineQuery(`*[_type == "candidate" && email == $email ]{
  id,
  name,
  email,
  mobile,
  image,
  skills,
  otherSkills,
  experience,
  linkedin,
  github,
  portfolio,
  about
}`);

export const RECRUITER_QUERY =
    defineQuery(`*[_type == "recruiter" && email == $email ]{
  id,
  name,
  email,
  mobile,
  image,
  company,
  role,
  info,
}`);
