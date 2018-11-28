import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';
import Paint from '../Paint';

describe('Paint Specs', () => {
	it('should render a Paint with content', function () {
		const content = 'Hello Paint!';

		const Paint = mount(
			<Paint>{content}</Paint>
		);

		const expected = content;
		const actual = Paint.text();

		expect(actual).to.equal(expected);
	});

	it('should callback with index when clicked', function () {
		let index = 0;
		const handleSelect = sinon.spy();

		const Paint = mount(
			<Paint index={0} onSelect={handleSelect} />
		);

		Paint.simulate('click', {});

		const expected = index;
		const actual = handleSelect.firstCall.args[0].index;

		expect(actual).to.equal(expected);
	});
});
