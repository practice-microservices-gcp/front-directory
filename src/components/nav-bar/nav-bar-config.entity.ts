export interface NavBarItem {
    icon?: string;
    text?: string;
    event: string;
}

export interface NavBarConfig {
    leftPossition: NavBarItem[];
    centerPossition: NavBarItem[];
    rigthPossition: NavBarItem[];
}