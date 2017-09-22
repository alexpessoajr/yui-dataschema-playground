
YUI().use('node', 'datatype-xml', 'dataschema-xml', 'editor-base', function (Y) {

    const xml = Y.one('#xml');
    const schema = Y.one('#schema');

    xml.on('change', update);
    schema.on('change', update);

    function update() {
        let data = Y.DataType.XML.parse(xml.get('value'));
        let schemaObject;

        try {
            schemaObject = eval(`(${schema.get('value')})`);
        } catch (err) {
            //alert('Invalid schema');
        }
        
        Y.one('#output').setContent(
            JSON.stringify(Y.DataSchema.XML.apply(schemaObject, data), null, 4)
        );
    }
});
