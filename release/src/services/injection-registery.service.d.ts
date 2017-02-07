
import { ComponentRef } from '@angular/core';
import { InjectionService } from '.';
export declare abstract class InjectionRegisteryService {
    protected injectionService: InjectionService;
    protected abstract type: any;
    protected defaults: any;
    protected components: Map<any, any>;
    constructor(injectionService: InjectionService);
    getByType(type?: any): any;
    create(bindings: any): any;
    createByType(type: any, bindings: any): any;
    destroy(instance: any): void;
    destroyAll(): void;
    destroyByType(type: any): void;
    protected injectComponent(type: any, bindings: any): ComponentRef<any>;
    protected assignDefaults(bindings: any): any;
    protected register(type: any, component: any): void;
}
