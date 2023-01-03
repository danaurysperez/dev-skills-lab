let skills

const $button = $('button')
const $ul = $('ul')
const $input = $('input')

$button.on("click", handleAddSkill)
$ul.on("click", "span", handleDelete)

// functions

init()

function init() {
  skills = []

  render()
}
function handleAddSkill() {
const skill = $input.val()
  if (skill) {
    const $skill = $(`<li><span>X</span>${skill}</li>`)
    skills.push($skill)
    $input.val("")
    render()
  } else return
}

function handleDelete() {
  $(this).closest('li').remove()
  let currentSkill = $(this).closest('li')
  skills.pop(currentSkill)
}
function render() {
  if (!skills.length) $ul.css("margin-bottom", "30px")
  else $ul.css("margin-bottom", "0px")

  $ul.html(skills)
}