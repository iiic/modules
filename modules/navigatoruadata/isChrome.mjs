export class append
{
	constructor ( n = NavigatorUAData )
	{
		const FUNCTION_NAME = 'isChrome';

		const determine = function ()
		{
			// @ts-ignore
			if ( navigator.userAgentData && navigator.userAgentData.brands ) {
				// @ts-ignore
				const brands = navigator.userAgentData.brands;
				for ( let i = brands.length - 1; i >= 0; i-- ) {
					if ( brands[ i ].brand === 'Chromium' ) {
						return true;
					}
				}
			}
			return false;
		};

		if ( typeof n.prototype[ FUNCTION_NAME ] !== 'function' ) {
			Object.defineProperty( n.prototype, FUNCTION_NAME, {
				value: determine(),
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
