export const createCollecting = (data) => (
  $.ajax({
    method: 'POST',
    url: `api/collectings`,
    data
  })
);

export const destroyCollecting = (collectedId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/collectings/${collectedId}`
  })
);
