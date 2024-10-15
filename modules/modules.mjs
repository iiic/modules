class Modules
{

  static autoAppend ( /** @type {Object} */ obj, /** @type {Function} */ func, /** @type {String|Symbol} */ propertyName = '' )
	{
		if ( !propertyName ) {
			propertyName = func.name;
		}
		if ( propertyName in obj && obj[ propertyName ] === func ) { // already appended, no changes in function
			return true;
		}
		Object.defineProperty( obj, propertyName, {
			value: func,
			writable: false,
			configurable: false,
			enumerable: false,
		} );
	}

}

export const { autoAppend } = Modules;
