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
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, RangeControl } from '@wordpress/components';

import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

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
export default function Edit({ attributes, setAttributes }) {
    const { numberOfProducts, displayPrice } = attributes;
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const blockProps = useBlockProps();

    useEffect(() => {
        fetchProducts();
    }, [numberOfProducts]);

    const fetchProducts = async () => {
        try {
            const response = await apiFetch({
                path: '/woo-ftp-block/v1/products',
            });
            setProducts(response);
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('Block Settings', 'woo-ftp-block')}>
                    <RangeControl
                        label={__('Number of Products', 'woo-ftp-block')}
                        value={numberOfProducts}
                        onChange={(value) => setAttributes({ numberOfProducts: value })}
                        min={1}
                        max={20}
                    />
                    <ToggleControl
                        label={__('Display Price', 'woo-ftp-block')}
                        checked={displayPrice}
                        onChange={() => setAttributes({ displayPrice: !displayPrice })}
                    />
                </PanelBody>
            </InspectorControls>

            <div className="woo-ftp-products">
                {isLoading ? (
                    <p>{__('Loading products...', 'woo-ftp-block')}</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : (
                    <ul className="products-list">
                        {products.slice(0, numberOfProducts).map((product) => (
                            <li key={product.id} className="product-item">
                                <h4>{product.name}</h4>
                                {displayPrice && (
                                    <div className="price" 
                                         dangerouslySetInnerHTML={{__html: product.price}} 
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}