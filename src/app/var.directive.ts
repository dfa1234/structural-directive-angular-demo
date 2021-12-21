import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngStructVar]',
})
export class VarDirective {
  @Input()
  set ngStructVar(value: string) {
    this.context.$implicit = this.context.ngStructVar = value;
    this.updateView();
  }

  context: { $implicit?: string; ngStructVar?: string } = {};

  constructor(
    private viewRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  private updateView() {
    this.viewRef.clear();
    this.viewRef.createEmbeddedView(this.templateRef, this.context);
  }
}
