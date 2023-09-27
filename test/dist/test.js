/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable object-curly-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isndarrayLike = require( '@stdlib/assert-is-ndarray-like' );
var isReadOnly = require( '@stdlib/ndarray-base-assert-is-read-only' );
var MultiSlice = require( '@stdlib/slice-multi' );
var Slice = require( '@stdlib/slice-ctor' );
var zeroTo = require( '@stdlib/array-base-zero-to' );
var typedarray = require( '@stdlib/array-typed' );
var array = require( '@stdlib/ndarray-array' );
var zeros = require( '@stdlib/ndarray-zeros' );
var numel = require( '@stdlib/ndarray-base-numel' );
var scalar2ndarray = require( '@stdlib/ndarray-base-from-scalar' );
var baseCtor = require( '@stdlib/ndarray-base-ctor' );
var ctor = require( '@stdlib/ndarray-ctor' );
var slice = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof slice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the number of slice dimensions does not match the number of array dimensions (strict=false)', function test( t ) {
	var values;
	var slices;
	var i;

	values = [
		zeros( [] ),
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];
	slices = [
		new MultiSlice( null ),
		new MultiSlice( null, null, null ),
		new MultiSlice( null ),
		new MultiSlice( null, null ),
		new MultiSlice( null, null, null )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			slice( x, s, false );
		};
	}
});

tape( 'the function throws an error if the number of slice dimensions does not match the number of array dimensions (strict=true)', function test( t ) {
	var values;
	var slices;
	var i;

	values = [
		zeros( [] ),
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];
	slices = [
		new MultiSlice( null ),
		new MultiSlice( null, null, null ),
		new MultiSlice( null ),
		new MultiSlice( null, null ),
		new MultiSlice( null, null, null )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			slice( x, s, true );
		};
	}
});

tape( 'in strict mode, the function throws an error when a slice exceeds array bounds', function test( t ) {
	var values;
	var slices;
	var s;
	var i;

	values = [
		zeros( [ 1 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 1, 1, 1 ] ),
		zeros( [ 1, 1, 1, 1 ] )
	];

	s = new Slice( 10, 20, 1 );
	slices = [
		new MultiSlice( 10 ),
		new MultiSlice( null, s ),
		new MultiSlice( s, null, null ),
		new MultiSlice( s, s, null, null )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValues( values[ i ], slices[ i ] ), RangeError, 'throws an error when provided ' + slices[ i ].toString() );
	}
	t.end();

	function badValues( x, s ) {
		return function badValues() {
			slice( x, s, true );
		};
	}
});

tape( 'in non-strict mode, the function returns an empty array when a slice exceeds array bounds', function test( t ) {
	var actual;
	var values;
	var slices;
	var s;
	var i;

	values = [
		zeros( [ 1 ], { 'dtype': 'float64' } ),
		zeros( [ 1, 1 ], { 'dtype': 'float32' } ),
		zeros( [ 1, 1, 1 ], { 'dtype': 'int32' } ),
		zeros( [ 1, 1, 1, 1 ], { 'dtype': 'uint32' } ),
		zeros( [ 1, 1, 1, 1, 1 ], { 'dtype': 'complex128' } )
	];

	s = new Slice( 10, 20, 1 );
	slices = [
		new MultiSlice( 10 ),
		new MultiSlice( null, s ),
		new MultiSlice( s, null, null ),
		new MultiSlice( s, s, null, null ),
		new MultiSlice( 0, null, null, null, 10 )
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = slice( values[ i ], slices[ i ], false );
		t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
		t.strictEqual( numel( actual.shape ), 0, 'returns expected value' );
		t.strictEqual( actual.dtype, values[ i ].dtype, 'returns expected value' );
	}
	t.end();
});

tape( 'when provided a zero-dimensional input array, the function returns a zero-dimensional array view (base)', function test( t ) {
	var actual;
	var x;
	var s;

	x = scalar2ndarray( 3.14, 'float64', 'row-major' );
	s = new MultiSlice();

	actual = slice( x, s, true );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.get(), x.get(), 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'when provided a zero-dimensional input array, the function returns a zero-dimensional array view (base, offset)', function test( t ) {
	var actual;
	var x;
	var s;

	x = new baseCtor( 'float64', typedarray( zeroTo( 4 ), 'float64' ), [], [ 0 ], 3, 'row-major' );
	s = new MultiSlice();

	actual = slice( x, s, true );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.get(), 3, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	t.end();
});

tape( 'when provided a zero-dimensional input array, the function returns a zero-dimensional array view (non-base, offset)', function test( t ) {
	var actual;
	var x;
	var s;

	x = new ctor( 'float64', typedarray( zeroTo( 4 ), 'float64' ), [], [ 0 ], 3, 'row-major' );
	s = new MultiSlice();

	actual = slice( x, s, true );
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 0, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.get(), 3, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );
	t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );

	t.end();
});

tape( 'if all dimensions are reduced, the function returns a zero-dimensional array view (non-base)', function test( t ) {
	var expected;
	var actual;
	var values;
	var slices;
	var x;
	var s;
	var i;

	values = [
		array( typedarray( zeroTo( 4 ), 'float64' ), {
			'shape': [ 2, 2 ],
			'dtype': 'float64'
		}),
		array( typedarray( zeroTo( 8 ), 'float32' ), {
			'shape': [ 2, 2, 2 ],
			'dtype': 'float32'
		}),
		array( typedarray( zeroTo( 2 ), 'int32' ), {
			'shape': [ 2 ],
			'dtype': 'int32'
		}),
		array( typedarray( zeroTo( 16 ), 'uint32' ), {
			'shape': [ 2, 2, 2, 2 ],
			'dtype': 'uint32'
		})
	];
	slices = [
		new MultiSlice( 0, 1 ),
		new MultiSlice( 0, 1, 0 ),
		new MultiSlice( 0 ),
		new MultiSlice( 0, 1, 0, 1 )
	];
	expected = [
		1,
		2,
		0,
		5
	];
	for ( i = 0; i < values.length; i++ ) {
		x = values[ i ];
		s = slices[ i ];
		actual = slice( x, s, true );
		t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
		t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
		t.strictEqual( actual.ndims, 0, 'returns expected value' );
		t.strictEqual( actual.get(), expected[ i ], 'returns expected value' );
		t.strictEqual( actual.data, x.data, 'returns expected value' );
		t.strictEqual( isReadOnly( actual ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a view of a provided input array (ndims=1)', function test( t ) {
	var expected;
	var actual;
	var buf;
	var ord;
	var sh;
	var st;
	var o;
	var x;
	var s;
	var i;

	buf = typedarray( zeroTo( 30 ), 'float64' );
	sh = [ 6 ];
	st = [ 2 ];
	o = 4;
	ord = 'row-major';

	x = new ctor( 'float64', buf, sh, st, o, ord );

	s = new MultiSlice( null );
	actual = slice( x, s, true );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 4, 6, 8, 10, 12, 14 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}

	// Reverse order and skip every other element:
	s = new MultiSlice( new Slice( null, null, -2 ) );
	actual = slice( x, s, true );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.ndims, 1, 'returns expected value' );
	t.strictEqual( actual.dtype, x.dtype, 'returns expected value' );
	t.strictEqual( actual.data, x.data, 'returns expected value' );

	expected = [ 14, 10, 6 ];
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual.iget( i ), expected[ i ], 'returns expected value' );
	}
	t.end();
});
