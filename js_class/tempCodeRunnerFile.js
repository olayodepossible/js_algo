
.map(
  (bankCode) => `
  ${ ? ` <li>${} parser had ${} ${} errors. Consider reviewing the statement parser.</li> ` ``: ``}
  ${payload.data[bankCode].total === 0 ? `<li>There was no statement parsed from ${} for this period.</li> `: ``} `
)