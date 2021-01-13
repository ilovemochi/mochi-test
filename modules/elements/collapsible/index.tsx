import { useI18n } from '@hooks';
import { FC, useEffect, useState } from 'react';
import CollapsibleView from 'react-collapsible';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { v4 } from 'uuid';

import Text from '../text';
import View from '../view';
import { CollapsibleProps, RenderCollapsiblesProps } from './collapsible.types';

const Collapsible: FC<CollapsibleProps> = ({ title, content, inline, Icon, opened = false }) => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(opened);

  useEffect(() => setIsOpen(opened), [opened]);

  return (
    <View width="100%">
      <CollapsibleView
        open={isOpen}
        transitionTime={250}
        transitionCloseTime={250}
        triggerClassName="trigger"
        triggerOpenedClassName="trigger-opened"
        contentOuterClassName="outer"
        contentInnerClassName="inner"
        onOpening={() => {
          setIsOpen(true);
        }}
        onClosing={() => {
          setIsOpen(false);
        }}
        trigger={
          <View
            className="header"
            py={inline ? 'M' : 'L'}
            px={inline ? 'L' : 'XL'}
            display="flex"
            cursor="pointer"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              variant={inline ? 'body' : 'h4'}
              color={isOpen ? 'accentTertiary' : 'currentColor'}
            >
              {!!Icon && (
                <View
                  m="M"
                  aria-hidden="true"
                  display="inline-block"
                  fontSize={inline ? 'Small' : 'Large'}
                >
                  <Icon aria-hidden="true" />
                </View>
              )}
              {title}
            </Text>
            {isOpen ? (
              <FaMinus size={14} role="img" aria-label={t('common.ariaLabel.hide')} />
            ) : (
              <FaPlus size={14} role="img" aria-label={t('common.ariaLabel.show')} />
            )}
          </View>
        }
      >
        <View className="answer" py="L" px="XL" mx="L" aria-label={t('common.ariaLabel.content')}>
          <Text variant="body" fontWeight="300" color="grayQuaternary">
            {content}
          </Text>
        </View>
      </CollapsibleView>
    </View>
  );
};

export const renderCollapsibles = ({ data }: RenderCollapsiblesProps) =>
  data.map(args => <Collapsible key={v4()} {...args} />);

export default Collapsible;

export * from './collapsible.types';
