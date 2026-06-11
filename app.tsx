// tryParsePrismaResponse парсит JSON, доставая чистое текстовое поле "text"
const prismaData = tryParsePrismaResponse(msg.text);
const textToRender = prismaData ? prismaData.text : msg.text;

// Рендерим чистый форматированный Markdown без логов
return formatMarkdownSegment(textToRender);
