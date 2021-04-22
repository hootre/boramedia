const CURRENT_TITLE = 'title/CURRENT_TITLE' as const;

export const current_title = (title: String) => ({
  type: CURRENT_TITLE,
  payload: title,
});

type TitleAction = ReturnType<typeof current_title>;

type TitleState = {
  title: String;
};

const initialState: TitleState = {
  title: 'I AM',
};

function title(state: TitleState = initialState, action: TitleAction) {
  switch (action.type) {
    case CURRENT_TITLE:
      return { title: action.payload };
    default:
      return state;
  }
}

export default title;
