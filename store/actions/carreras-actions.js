export const SELECT_CARRERA = "SELECT_CARRERA";

export const selectCarrera = (id) => ({
  type: SELECT_CARRERA,
  carreraId: id,
});
