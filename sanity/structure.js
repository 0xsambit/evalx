// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
    S.list()
        .title("Content")
        .items([
            S.documentTypeListItem("candidate").title("Candidates"),
            S.documentTypeListItem("recruiter").title("Recruiters"),
        ]);
