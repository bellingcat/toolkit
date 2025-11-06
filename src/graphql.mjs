function mutation(changes) {
  return `mutation ( $project: ID!) { ${changes.join(' ')} }`;
}
function setField(itemId, fieldId, name, value) {
  return (`
  set_field_${fieldId}: updateProjectV2ItemFieldValue(input: {
    projectId: $project
    itemId: "${itemId}"
    fieldId: "${fieldId}"
    value: { ${name}: ${JSON.stringify(value)} }
  }) { projectV2Item { id } }
  `).replace(/\n/g, ' ');
}
function setTextField(itemId, fieldId, value) {
  return setField(itemId, fieldId, 'text', value);
}
function setSelectField(itemId, fieldId, value) {
  return setField(itemId, fieldId, 'singleSelectOptionId', value);
}
function setDateField(itemId, fieldId, value) {
  return setField(itemId, fieldId, 'date', value);
}
export default {
  mutation,
  setDateField,
  setSelectField,
  setTextField,
};
