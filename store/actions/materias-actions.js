export const SELECT_MATERIA = "SELECT_MATERIA";
export const FILTER_MATERIA = "FILTER_MATERIA";

export const selectMateria = (id) => ({
  type: SELECT_MATERIA,
  materiaId: id,
});

export const filterMateria = (id) => ({
  type: FILTER_MATERIA,
  carreraId: id,
});
