<template>
  <div class="wrapper">
    <div class="header">
      <Header />
    </div>
    <div class="contacts">
      <Contacts />
    </div>
    <div class="skills">
      <Skills />
      <div class="certifications">
        <Certifications />
      </div>
    </div>
    <div class="experience">
      <Experience />
      <div class="projects">
        <Projects />
      </div>
    </div>
    <div class="education">
      <Education />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  row-gap: 30px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 190px auto 200px auto auto;
  grid-template-areas:
    "header header"
    "contacts experience"
    "education experience"
    "skills experience"
    "skills experience";
}
.contacts,
.skills,
.education {
  padding: 0 45px 0 45px;
}

.certifications {
  margin-top: 45px;
}
.projects {
  margin-bottom: 30px
}

.projects {
  padding: 0 45px 0 0;
}

.experience {
  padding: 0 45px 0 0;
}

@media (min-width: 25cm) {
  @media not print {
    .wrapper {
      padding: 0 0 45px 0;
    }
  }
}

.projects {
  padding: 0 !important;
}

.header {
  display: flex;
  grid-area: header;
  background-image: url("../assets/wave.svg");
  background-repeat: no-repeat;
}
.contacts {
  grid-area: contacts;
}
.skills {
  grid-area: skills;
}
.experience {
  grid-area: experience;
}
.education {
  grid-area: education;
}

@media (max-width: 25cm) {
  .wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto auto auto;
    grid-template-areas:
      "header"
      "contacts"
      "experience"
      "education"
      "skills";
  }
  .header {
    background-image: url("../assets/wave-mobile.svg") !important;
  }
  .contacts,
  .skills,
  .experience,
  .skills,
  .education {
    padding: 0 20px 0 20px !important;
  }
}
@media print {
  .header {
    margin-bottom: -45px;
  }
  .wrapper {
    grid-template-rows: auto auto 200px auto;
    grid-template-areas:
      "header header"
      "contacts experience"
      "education experience"
      "skills experience"
  }
}
</style>
