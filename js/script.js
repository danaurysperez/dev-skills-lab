let skills;
let skillNames;

const $button = $("button");
const $ul = $("ul");
const $input = $("input");

//Event Listeners
$button.on("click", handleAddSkill);
$ul.on("click", handleDelete);

init();

function init() {
  skillNames = getSavedSkillsFromLocalStorage();
  skills = [];
  for (let i = 0; i < skillNames.length; i++) {
    const $skill = $(`<li><span>X</span>${skillNames[i]}</li>`);
    skills.push($skill);
  }

  render();
}

function handleAddSkill() {
  const skill = $input.val();
  if (skill) {
    const $skill = $(`<li><span>X</span>${skill}</li>`);

    skills.push($skill);
    skillNames.push(skill);

    $input.val("");

    render();
    saveSkillsToLocalStorage();
  }
}

function handleDelete(event) {

  const removedSkill = event.target.closest("li");
  removedSkill.remove();

  for (let i = 0; i < skills.length; i++) {
    if (skills[i].get(0) === removedSkill) {
      skills.splice(i, 1);
      skillNames.splice(i, 1);
      saveSkillsToLocalStorage();
      return;
    }
  }
}

function render() {

  if (!skills.length) {
    $ul.css("margin-bottom", "30px");
  } else {
    $ul.css("margin-bottom", "0px");
  }

  $ul.html(skills);
}

function saveSkillsToLocalStorage() {
  const skillNamesStr = JSON.stringify(skillNames);
  localStorage.setItem("skills", skillNamesStr);
}

function getSavedSkillsFromLocalStorage() {
  const skillNamesStr = localStorage.getItem("skills");
  if (!skillNamesStr) {
    return [];
  }

  try {
    return JSON.parse(skillNamesStr);
  } catch (err) {
    return [];
  }
}
