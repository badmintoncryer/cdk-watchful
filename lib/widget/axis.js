"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeBytesAxis = exports.RateAxis = exports.CountAxis = exports.TimeSecondsAxis = exports.TimeMillisAxis = exports.PercentageAxis = void 0;
/**
 * Y-Axis showing percentage (0-100%, inclusive).
 */
exports.PercentageAxis = {
    min: 0,
    max: 100,
    label: '%',
    showUnits: false,
};
/**
 * Y-Axis showing time in milliseconds.
 */
exports.TimeMillisAxis = {
    min: 0,
    label: 'ms',
    showUnits: false,
};
/**
 * Y-Axis showing time in seconds.
 */
exports.TimeSecondsAxis = {
    min: 0,
    label: 'sec',
    showUnits: false,
};
/**
 * Y-Axis showing count (no units).
 */
exports.CountAxis = {
    min: 0,
    showUnits: false,
};
/**
 * Y-Axis showing rate (0.5 = 50%, 1 = 100%, etc).
 */
exports.RateAxis = {
    min: 0,
    label: 'rate',
    showUnits: false,
};
/**
 * Y-Axis showing size in bytes.
 */
exports.SizeBytesAxis = {
    min: 0,
    label: 'bytes',
    showUnits: false,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93aWRnZXQvYXhpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTs7R0FFRztBQUNVLFFBQUEsY0FBYyxHQUFlO0lBQ3hDLEdBQUcsRUFBRSxDQUFDO0lBQ04sR0FBRyxFQUFFLEdBQUc7SUFDUixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxLQUFLO0NBQ2pCLENBQUM7QUFFRjs7R0FFRztBQUNVLFFBQUEsY0FBYyxHQUFlO0lBQ3hDLEdBQUcsRUFBRSxDQUFDO0lBQ04sS0FBSyxFQUFFLElBQUk7SUFDWCxTQUFTLEVBQUUsS0FBSztDQUNqQixDQUFDO0FBRUY7O0dBRUc7QUFDVSxRQUFBLGVBQWUsR0FBZTtJQUN6QyxHQUFHLEVBQUUsQ0FBQztJQUNOLEtBQUssRUFBRSxLQUFLO0lBQ1osU0FBUyxFQUFFLEtBQUs7Q0FDakIsQ0FBQztBQUVGOztHQUVHO0FBQ1UsUUFBQSxTQUFTLEdBQWU7SUFDbkMsR0FBRyxFQUFFLENBQUM7SUFDTixTQUFTLEVBQUUsS0FBSztDQUNqQixDQUFDO0FBRUY7O0dBRUc7QUFDVSxRQUFBLFFBQVEsR0FBZTtJQUNsQyxHQUFHLEVBQUUsQ0FBQztJQUNOLEtBQUssRUFBRSxNQUFNO0lBQ2IsU0FBUyxFQUFFLEtBQUs7Q0FDakIsQ0FBQztBQUVGOztHQUVHO0FBQ1UsUUFBQSxhQUFhLEdBQWU7SUFDdkMsR0FBRyxFQUFFLENBQUM7SUFDTixLQUFLLEVBQUUsT0FBTztJQUNkLFNBQVMsRUFBRSxLQUFLO0NBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBZQXhpc1Byb3BzIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWNsb3Vkd2F0Y2gnO1xuXG4vKipcbiAqIFktQXhpcyBzaG93aW5nIHBlcmNlbnRhZ2UgKDAtMTAwJSwgaW5jbHVzaXZlKS5cbiAqL1xuZXhwb3J0IGNvbnN0IFBlcmNlbnRhZ2VBeGlzOiBZQXhpc1Byb3BzID0ge1xuICBtaW46IDAsXG4gIG1heDogMTAwLFxuICBsYWJlbDogJyUnLFxuICBzaG93VW5pdHM6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBZLUF4aXMgc2hvd2luZyB0aW1lIGluIG1pbGxpc2Vjb25kcy5cbiAqL1xuZXhwb3J0IGNvbnN0IFRpbWVNaWxsaXNBeGlzOiBZQXhpc1Byb3BzID0ge1xuICBtaW46IDAsXG4gIGxhYmVsOiAnbXMnLFxuICBzaG93VW5pdHM6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBZLUF4aXMgc2hvd2luZyB0aW1lIGluIHNlY29uZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBUaW1lU2Vjb25kc0F4aXM6IFlBeGlzUHJvcHMgPSB7XG4gIG1pbjogMCxcbiAgbGFiZWw6ICdzZWMnLFxuICBzaG93VW5pdHM6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBZLUF4aXMgc2hvd2luZyBjb3VudCAobm8gdW5pdHMpLlxuICovXG5leHBvcnQgY29uc3QgQ291bnRBeGlzOiBZQXhpc1Byb3BzID0ge1xuICBtaW46IDAsXG4gIHNob3dVbml0czogZmFsc2UsXG59O1xuXG4vKipcbiAqIFktQXhpcyBzaG93aW5nIHJhdGUgKDAuNSA9IDUwJSwgMSA9IDEwMCUsIGV0YykuXG4gKi9cbmV4cG9ydCBjb25zdCBSYXRlQXhpczogWUF4aXNQcm9wcyA9IHtcbiAgbWluOiAwLFxuICBsYWJlbDogJ3JhdGUnLFxuICBzaG93VW5pdHM6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBZLUF4aXMgc2hvd2luZyBzaXplIGluIGJ5dGVzLlxuICovXG5leHBvcnQgY29uc3QgU2l6ZUJ5dGVzQXhpczogWUF4aXNQcm9wcyA9IHtcbiAgbWluOiAwLFxuICBsYWJlbDogJ2J5dGVzJyxcbiAgc2hvd1VuaXRzOiBmYWxzZSxcbn07XG4iXX0=