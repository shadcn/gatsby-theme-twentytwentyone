import filter from "lodash.filter"

export function applyFilters(data, filters, mainProperty = "title") {
  const key = Object.keys(data)[0]
  const nodes = data[key].nodes

  if (!nodes) return []

  if (typeof filters === "string") {
    filters = {
      [mainProperty]: filters,
    }
  }

  return filter(nodes, filters)
}
