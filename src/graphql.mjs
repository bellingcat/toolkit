function mutation(changes) {
  return `mutation ( $project: ID!) { ${changes.join(' ')} }`;
}
function setField(itemId, fieldId, key, value) {
  return (`
  set_field_${fieldId.replace(/-/g, '_')}: updateProjectV2ItemFieldValue(input: {
    projectId: $project
    itemId: "${itemId}"
    fieldId: "${fieldId}"
    value: { ${key}: ${JSON.stringify(value)} }
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
  var dateString = formatDate(value);
  return setField(itemId, fieldId, 'date', dateString);
}
function formatDate(value) {
  return (new Date(value)).toISOString().replace(/T.*/,'');
}
export default {
  formatDate,
  mutation,
  setDateField,
  setSelectField,
  setTextField,
};
