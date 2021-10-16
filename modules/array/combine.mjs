export class append
{
	constructor ( a = Array )
	{
		const FUNCTION_NAME = 'combine';

		if ( typeof a.prototype[ FUNCTION_NAME ] !== 'function' ) {
			Object.defineProperty( a.prototype, FUNCTION_NAME, {
				value: function ()
				{
					const self = function (/** @type {Array} */ Arr, /** @type {Array} */ comb = [] )
					{
						let result = [ comb ];
						const ArrLength = Arr.length;
						for ( let i = 0; i < ArrLength; i++ ) {
							result = result.concat(
								self( Arr.slice( 0, i ).concat( Arr.slice( i + 1 ) ), comb.concat( Arr[ i ] ) )
							);
						}
						return result;
					};
					const result = self( this );
					result.shift();
					return result;
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
