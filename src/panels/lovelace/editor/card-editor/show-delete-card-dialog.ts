import { fireEvent } from "../../../../common/dom/fire_event";
import { LovelaceCardConfig } from "../../../../data/lovelace";

export interface DeleteCardDialogParams {
  deleteCard: () => void;
  cardConfig?: LovelaceCardConfig;
}

const importDeleteCardDialog = () =>
  import(
    /* webpackChunkName: "hui-dialog-delete-card" */ "./hui-dialog-delete-card"
  );

export const showDeleteCardDialog = (
  element: HTMLElement,
  deleteCardDialogParams: DeleteCardDialogParams
): void => {
  fireEvent(element, "show-dialog", {
    dialogTag: "hui-dialog-delete-card",
    dialogImport: importDeleteCardDialog,
    dialogParams: deleteCardDialogParams,
  });
};
