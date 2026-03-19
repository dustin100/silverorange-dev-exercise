class ModalDialog extends HTMLElement {
  connectedCallback() {
    console.log("testing");
    this.trigger = this.querySelector('[data-modal="trigger"]');
    this.dialog = this.querySelector('[data-modal="dialog"]');
    this.closeBtn = this.querySelector('[data-modal="close"]');

    this._onTriggerClick = () => this.dialog?.showModal();
    this._onCloseClick = () => this.dialog?.close();
    this._onBackdropClick = (e) => {
      if (e.target === this.dialog) this.dialog.close();
    };

    this.trigger?.addEventListener("click", this._onTriggerClick);
    this.closeBtn?.addEventListener("click", this._onCloseClick);
    this.dialog?.addEventListener("click", this._onBackdropClick);
  }

  disconnectedCallback() {
    this.trigger?.removeEventListener("click", this._onTriggerClick);
    this.closeBtn?.removeEventListener("click", this._onCloseClick);
    this.dialog?.removeEventListener("click", this._onBackdropClick);
  }
}

customElements.define("modal-dialog", ModalDialog);
