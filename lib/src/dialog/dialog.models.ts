import { OverlayRef } from '@angular/cdk/overlay';
import { Type } from '@angular/core';
import { Subject } from 'rxjs';

export type NesDialogConfig = {
  height?: string | number;
  width?: string | number;
};

export type NesDialogParams<T> = {
  height?: string | number;
  width?: string | number;
  component: Type<any>;
  data?: T;
}

export type NesDialogCloseEvent<T = any> = {
  type: 'backdropClick' | 'close';
  data?: T;
};

export class NesDialogRef<T = any> {
  private _afterClosed$ = new Subject<NesDialogCloseEvent<T>>();

  afterClosed$ = this._afterClosed$.asObservable();

  constructor(
    public overlay: OverlayRef,
    public component: Type<any>,
    public data?: T,
  ) {
    overlay
      .backdropClick()
      .subscribe(() => {
        this._close('backdropClick', undefined);
      });
  }

  close(data?: T): void {
    this._close('close', data);
  }

  private _close(type: NesDialogCloseEvent['type'], data?: T): void {
    this.overlay.dispose();

    this._afterClosed$.next({ type, data });
    this._afterClosed$.complete();
  }
}
