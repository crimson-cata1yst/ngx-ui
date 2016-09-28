import { DrawerManagerService } from './drawer-manager.service';
export declare class DrawerContainerComponent {
    private drawerManager;
    /**
     * Get if the overlay should be active or not.
     * @return {Boolean} active
     */
    readonly overlayActive: string;
    constructor(drawerManager: DrawerManagerService);
}