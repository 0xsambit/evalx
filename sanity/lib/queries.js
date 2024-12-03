const { defineQuery } = require("next-sanity");

export const CANDIDATEE_QUERY = defineQuery(`*[_type == "candidate"]{
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
