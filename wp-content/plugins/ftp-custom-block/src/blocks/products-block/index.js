const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RangeControl } = wp.components;
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
// registerBlockType( metadata.name, {
// 	/**
// 	 * @see ./edit.js
// 	 */
// 	edit: Edit,

// 	/**
// 	 * @see ./save.js
// 	 */
// 	save,
// } );


registerBlockType('build/blocks/products-block', {
    title: __('WooCommerce Products List'),
    icon: 'grid-view',
    category: 'widgets',
    attributes: {
        columns: {
            type: 'number',
            default: 3
        }
    },

    edit: (props) => {
        const { attributes, setAttributes } = props;

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Layout Settings')}>
                        <RangeControl
                            label={__('Columns')}
                            value={attributes.columns}
                            onChange={(columns) => setAttributes({ columns })}
                            min={1}
                            max={6}
                        />
                    </PanelBody>
                </InspectorControls>
                <div className="woo-products-block">
                    <div className="products-grid" style={{
                        gridTemplateColumns: `repeat(${attributes.columns}, 1fr)`
                    }}>
                        <div className="product-card placeholder">
                            <div className="product-image"></div>
                            <h3>Product Title</h3>
                            <div className="price">$99.99</div>
                        </div>
                    </div>
                </div>
            </>
        );
    },

    save: () => {
        return null; // Dynamic block, render callback on server
    }
});