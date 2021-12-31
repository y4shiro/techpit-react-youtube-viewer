export default (state, action) => {
  switch (action.type) {
    case 'init': {
      // お気に入りリスト初期化
      const { ids } = action;
      // action に渡された ids で初期化する
      // また、initialized: true を設定して初期化されたことを設定しておく
      return { ids, initialized: true };
    }

    case 'add': {
      // お気に入りリストへの追加
      // action に渡された動画 ID を追加する
      const { ids } = state;
      const { id } = action;
      const index = ids.indexOf(id);

      if (index !== -1) return state; // 既に存在する id なら state を変更しない
      ids.push(id);
      return { ...state, ids };
    }

    case 'remove': {
      // お気に入りリストから削除
      const { ids } = state;
      const { id } = action;
      const index = ids.indexOf(id);

      if (index === -1) return state; // 存在しない id なら state を変更しない
      ids.splice(index, 1);
      return { ...state, ids };
    }

    default:
      throw new Error(`${action.type} is not defined.`);
  }
};
