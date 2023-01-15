import Airtable from 'airtable';

// Authenticate
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const table = base(process.env.AIRTABLE_TABLE_NAME);

// To get minified records array
const minifyItems = (records) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record) => {
  if (!record.fields.vegetarien) {
    record.fields.vegetarien = false;
  }

  if (!record.fields.samedi) {
    record.fields.samedi = false;
  }

  if (!record.fields.brunch) {
    record.fields.brunch = false;
  }

  return {
    id: record.id,
    fields: record.fields,
  };
};

export { getMinifiedItem, minifyItems, table };
