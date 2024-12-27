/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { PanelBody, InspectorControls } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
// import metadata from '.block.json';
// export default function Edit(props) {
// 	return (
// 		<p { ...useBlockProps() }>
// 			{ __(
// 				'Ftproducts Block – hello from the editor!',
// 				'ftproducts-block'
// 			) }
// 		</p>
// 	);
// }

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RangeControl } = wp.components;

registerBlockType('woo-products/product-list', {
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
