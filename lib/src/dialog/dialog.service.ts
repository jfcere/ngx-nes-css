import { Overlay, OverlayConfig, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { NesDialogConfig, NesDialogParams, NesDialogRef } from './dialog.models';

@Injectable({
  providedIn: 'root',
})
export class NesDialogService {

  constructor(
    private readonly _injector: Injector,
    private readonly _overlay: Overlay,
  ) { }

  open<T>({ component, data, width, height }: NesDialogParams<T>): NesDialogRef<T> {
    const overlayConfig = this._getOverlayConfig({ width, height });
    const overlayRef = this._overlay.create(overlayConfig);
    const dialogRef = new NesDialogRef<T>(overlayRef, component, data);

    const injector = this._createInjector(dialogRef, this._injector);
    overlayRef.attach(new ComponentPortal(component, null, injector));

    return dialogRef;
  }

  private _createInjector(dialogRef: NesDialogRef, injector: Injector): Injector {
    return Injector.create({
      parent: injector,
      providers: [{ provide: NesDialogRef, useValue: dialogRef }],
    });
  }

  private _getOverlayConfig({ width, height }: NesDialogConfig): OverlayConfig {
    const positionStrategy = this._getPositionStrategy();
    return new OverlayConfig({
      hasBackdrop: true,
      width,
      height,
      positionStrategy: positionStrategy,
      scrollStrategy: this._overlay.scrollStrategies.block(),
    });
  }

  private _getPositionStrategy(): PositionStrategy {
    return this._overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
  }
}
